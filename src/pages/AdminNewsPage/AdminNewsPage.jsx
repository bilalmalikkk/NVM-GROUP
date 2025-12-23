import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Eye, EyeOff } from 'lucide-react';
import styles from './AdminNewsPage.module.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export function AdminNewsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image_key: '',
    image_url: '',
    date: new Date().toISOString().split('T')[0],
    status: 'DRAFT',
    language: 'no',
    link: ''
  });
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token');
    if (savedToken) {
      setToken(savedToken);
      verifyToken(savedToken);
    }
  }, []);

  // Fetch news when authenticated
  useEffect(() => {
    if (isAuthenticated && token) {
      fetchNews();
    }
  }, [isAuthenticated, token]);

  const verifyToken = async (tokenToVerify) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/verify`, {
        headers: {
          'Authorization': `Bearer ${tokenToVerify}`
        }
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('admin_token');
        setToken(null);
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('admin_token');
      setToken(null);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        localStorage.setItem('admin_token', data.token);
        setIsAuthenticated(true);
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your API URL.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setNewsItems([]);
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      // Fetch all news regardless of status for admin view
      const response = await fetch(`${API_BASE_URL}/api/news?limit=100&all=true`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setNewsItems(data.news || []);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Fetch news error:', errorData);
        alert('Failed to fetch news: ' + (errorData.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Fetch news error:', error);
      alert('Failed to fetch news: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url = editingItem 
        ? `${API_BASE_URL}/api/news/${editingItem.id}`
        : `${API_BASE_URL}/api/news`;
      
      const method = editingItem ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        await fetchNews();
        resetForm();
        alert(editingItem ? 'News updated successfully' : 'News created successfully');
      } else {
        alert(data.error || 'Operation failed');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Operation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '',
      description: item.description || '',
      content: item.content || '',
      image_key: item.image_key || '',
      image_url: item.image_url || '',
      date: item.date ? item.date.split('T')[0] : new Date().toISOString().split('T')[0],
      status: item.status || 'DRAFT',
      language: item.language || 'no',
      link: item.link || ''
    });
    // Set image preview if image_url exists
    if (item.image_url) {
      if (item.image_url.startsWith('http')) {
        setImagePreview(item.image_url);
      } else {
        // Handle relative paths from CMS uploads
        const imagePath = item.image_url.startsWith('/') ? item.image_url : `/${item.image_url}`;
        setImagePreview(`${API_BASE_URL}${imagePath}`);
      }
    } else if (item.image_key) {
      // If using image_key, we'll handle it in the News component, but show placeholder here
      setImagePreview(null);
    } else {
      setImagePreview(null);
    }
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this news item?')) {
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/news/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        await fetchNews();
        alert('News deleted successfully');
      } else {
        alert('Failed to delete news');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete news');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('Image size must be less than 10MB');
      return;
    }

    try {
      setUploadingImage(true);
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_BASE_URL}/api/upload/single`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        // Set the image URL - the API returns url like /uploads/images/...
        const imageUrl = data.media.url;
        setFormData({ ...formData, image_url: imageUrl, image_key: '' });
        
        // Set preview
        if (imageUrl.startsWith('http')) {
          setImagePreview(imageUrl);
        } else {
          setImagePreview(`${API_BASE_URL}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`);
        }
        
        alert('Image uploaded successfully');
      } else {
        alert(data.error || 'Failed to upload image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image: ' + error.message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, image_url: '', image_key: '' });
    setImagePreview(null);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      content: '',
      image_key: '',
      image_url: '',
      date: new Date().toISOString().split('T')[0],
      status: 'DRAFT',
      language: 'no',
      link: ''
    });
    setEditingItem(null);
    setImagePreview(null);
    setShowForm(false);
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.adminContainer}>
        <div className={styles.loginCard}>
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label>Username</label>
              <input type="text" name="username" required />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input type="password" name="password" required />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <p className={styles.apiInfo}>
            API URL: {API_BASE_URL}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminHeader}>
        <h1>News Management</h1>
        <div className={styles.headerActions}>
          <button onClick={fetchNews} disabled={loading}>
            Refresh
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className={styles.actionsBar}>
        <button 
          onClick={() => { resetForm(); setShowForm(true); }}
          className={styles.addButton}
        >
          <Plus size={20} /> Add News
        </button>
      </div>

      {showForm && (
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h2>{editingItem ? 'Edit News' : 'Create News'}</h2>
            <button onClick={resetForm} className={styles.closeButton}>
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Date *</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Language</label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                >
                  <option value="no">Norwegian</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Content (optional)</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows="5"
              />
            </div>

            <div className={styles.formGroup}>
              <label>News Image</label>
              <div className={styles.imageUploadSection}>
                {imagePreview ? (
                  <div className={styles.imagePreview}>
                    <img src={imagePreview} alt="Preview" />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className={styles.removeImageButton}
                    >
                      <X size={16} /> Remove Image
                    </button>
                  </div>
                ) : (
                  <div className={styles.uploadArea}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploadingImage}
                      id="image-upload"
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="image-upload" className={styles.uploadButton}>
                      {uploadingImage ? 'Uploading...' : 'Choose Image'}
                    </label>
                    <p className={styles.uploadHint}>
                      Upload an image (JPEG, PNG, GIF, WebP). Max size: 10MB
                    </p>
                  </div>
                )}
              </div>
              {formData.image_url && (
                <input
                  type="hidden"
                  value={formData.image_url}
                />
              )}
            </div>

            <div className={styles.formGroup}>
              <label>Link (optional)</label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className={styles.formActions}>
              <button type="submit" disabled={loading} className={styles.saveButton}>
                <Save size={20} /> {editingItem ? 'Update' : 'Create'}
              </button>
              <button type="button" onClick={resetForm} className={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className={styles.newsList}>
        {loading && !showForm && <p>Loading...</p>}
        {!loading && newsItems.length === 0 && (
          <p className={styles.emptyMessage}>No news items found. Create your first news item!</p>
        )}
        {newsItems.map((item) => (
          <div key={item.id} className={styles.newsCard}>
            <div className={styles.newsCardHeader}>
              <div>
                <h3>{item.title}</h3>
                <div className={styles.newsMeta}>
                  <span className={`${styles.badge} ${styles[item.status.toLowerCase()]}`}>
                    {item.status}
                  </span>
                  <span className={styles.badge}>{item.language.toUpperCase()}</span>
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className={styles.newsActions}>
                <button onClick={() => handleEdit(item)} className={styles.editButton}>
                  <Edit size={16} />
                </button>
                <button onClick={() => handleDelete(item.id)} className={styles.deleteButton}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <p className={styles.newsDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

