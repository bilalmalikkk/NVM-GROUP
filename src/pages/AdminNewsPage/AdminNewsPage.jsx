import React, { useState, useEffect, useRef } from 'react';
import { Plus, Edit, Trash2, Save, X, Eye, EyeOff } from 'lucide-react';
import styles from './AdminNewsPage.module.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD 
    ? 'https://nordic-medtek-cms-production.up.railway.app'
    : 'http://localhost:3001');

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
  const contentEditableRef = useRef(null);
  const descriptionEditableRef = useRef(null);

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

  // Sync contentEditable fields with formData when form is opened or item is edited
  useEffect(() => {
    if (showForm) {
      // Update contentEditable when form opens or when editing an item
      // Use a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        // Sync content field
        if (contentEditableRef.current) {
          const currentContent = contentEditableRef.current.innerHTML.trim();
          // Remove empty HTML tags to check if there's real content
          const currentText = contentEditableRef.current.textContent?.trim() || '';
          const formContent = formData.content || '';
          // Only update if:
          // 1. ContentEditable is empty (no text content) AND we have form content, OR
          // 2. We're editing and the content doesn't match
          if ((!currentText && formContent) || (editingItem && currentContent !== formContent && formContent)) {
            contentEditableRef.current.innerHTML = formContent || '';
          } else if (!formContent && !currentText) {
            // Both are empty, ensure contentEditable is truly empty
            contentEditableRef.current.innerHTML = '';
          }
        }
        // Sync description field
        if (descriptionEditableRef.current) {
          const currentDescription = descriptionEditableRef.current.innerHTML.trim();
          const currentText = descriptionEditableRef.current.textContent?.trim() || '';
          const formDescription = formData.description || '';
          // Only update if:
          // 1. ContentEditable is empty (no text content) AND we have form description, OR
          // 2. We're editing and the description doesn't match
          if ((!currentText && formDescription) || (editingItem && currentDescription !== formDescription && formDescription)) {
            descriptionEditableRef.current.innerHTML = formDescription || '';
          } else if (!formDescription && !currentText) {
            // Both are empty, ensure contentEditable is truly empty
            descriptionEditableRef.current.innerHTML = '';
          }
        }
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [showForm, editingItem]);

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
      
      // Get latest content from contentEditable refs before submitting
      // This ensures we capture content even if onInput didn't fire
      let latestContent = formData.content || '';
      let latestDescription = formData.description || '';
      
      if (contentEditableRef.current) {
        let contentHtml = contentEditableRef.current.innerHTML.trim();
        // Remove empty HTML tags like <br>, <div><br></div>, <p><br></p>, etc.
        // Check if content is actually meaningful (not just empty tags)
        const textContent = contentEditableRef.current.textContent?.trim() || '';
        if (textContent) {
          latestContent = contentHtml;
        } else {
          // If no text content, set to empty string (will be converted to null)
          latestContent = '';
        }
      }
      
      if (descriptionEditableRef.current) {
        let descriptionHtml = descriptionEditableRef.current.innerHTML.trim();
        // Remove empty HTML tags
        const textContent = descriptionEditableRef.current.textContent?.trim() || '';
        if (textContent) {
          latestDescription = descriptionHtml;
        } else {
          latestDescription = '';
        }
      }
      
      const url = editingItem 
        ? `${API_BASE_URL}/api/news/${editingItem.id}`
        : `${API_BASE_URL}/api/news`;
      
      const method = editingItem ? 'PUT' : 'POST';

      // Prepare data for submission
      const submitData = {
        title: formData.title,
        // Convert date to ISO 8601 format if it's in YYYY-MM-DD format
        date: formData.date ? (formData.date.includes('T') ? formData.date : `${formData.date}T00:00:00.000Z`) : new Date().toISOString(),
        status: formData.status,
        language: formData.language,
        // Use latest content from refs, fallback to formData, or null if empty
        description: latestDescription || null,
        // Always include content - use latestContent if it has text, otherwise keep existing content if editing
        content: latestContent || (editingItem && editingItem.content ? editingItem.content : null),
        // Only include image_key if image_url is not set
        image_key: formData.image_url ? null : (formData.image_key || null),
        image_url: formData.image_url || null,
        link: formData.link || null
      };
      
      // If editing and contentEditable is empty but we have existing content, preserve it
      if (editingItem && !latestContent && editingItem.content) {
        submitData.content = editingItem.content;
      }

      // Remove undefined values
      Object.keys(submitData).forEach(key => {
        if (submitData[key] === undefined) {
          delete submitData[key];
        }
      });

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(submitData)
      });

      let data;
      const responseText = await response.text();
      
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError);
        alert(`Server error: ${response.status} ${response.statusText}\nResponse: ${responseText}`);
        return;
      }

      if (response.ok) {
        await fetchNews();
        resetForm();
        alert(editingItem ? 'News updated successfully' : 'News created successfully');
      } else {
        // Show detailed error message
        const errorMsg = data.error || data.message || 'Operation failed';
        let errorDetails = '';
        
        if (data.errors && Array.isArray(data.errors)) {
          errorDetails = data.errors.map(e => {
            if (typeof e === 'string') return e;
            return e.msg || e.message || JSON.stringify(e);
          }).join('\n');
        } else if (data.details) {
          errorDetails = typeof data.details === 'string' ? data.details : JSON.stringify(data.details);
        }
        
        const fullError = errorDetails ? `${errorMsg}\n\nDetails:\n${errorDetails}` : errorMsg;
        alert(fullError);
        console.error('News operation error:', {
          status: response.status,
          statusText: response.statusText,
          data: data,
          submittedData: submitData
        });
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
      e.target.value = ''; // Reset file input
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('Image size must be less than 10MB');
      e.target.value = ''; // Reset file input
      return;
    }

    try {
      setUploadingImage(true);
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const response = await fetch(`${API_BASE_URL}/api/upload/single`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: uploadFormData
      });

      const data = await response.json();

      if (response.ok) {
        // Set the image URL - the API returns url like /uploads/images/...
        const imageUrl = data.media.url;
        setFormData(prev => ({ ...prev, image_url: imageUrl, image_key: '' }));
        
        // Set preview
        if (imageUrl.startsWith('http')) {
          setImagePreview(imageUrl);
        } else {
          setImagePreview(`${API_BASE_URL}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`);
        }
        
        alert('Image uploaded successfully');
      } else {
        const errorMsg = data.error || data.message || 'Failed to upload image';
        alert(`Image upload failed: ${errorMsg}`);
        console.error('Upload error response:', data);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image: ' + error.message);
    } finally {
      setUploadingImage(false);
      e.target.value = ''; // Reset file input
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
    // Clear contentEditable fields
    if (contentEditableRef.current) {
      contentEditableRef.current.innerHTML = '';
    }
    if (descriptionEditableRef.current) {
      descriptionEditableRef.current.innerHTML = '';
    }
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
              <label>Description (HTML supported)</label>
              <div className={styles.richTextEditor}>
                <div className={styles.richTextToolbar}>
                  <button
                    type="button"
                    onClick={() => {
                      if (descriptionEditableRef.current) {
                        descriptionEditableRef.current.focus();
                        document.execCommand('bold', false, null);
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Bold"
                  >
                    <strong>B</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (descriptionEditableRef.current) {
                        descriptionEditableRef.current.focus();
                        document.execCommand('italic', false, null);
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Italic"
                  >
                    <em>I</em>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (descriptionEditableRef.current) {
                        descriptionEditableRef.current.focus();
                        document.execCommand('underline', false, null);
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Underline"
                  >
                    <u>U</u>
                  </button>
                  <div className={styles.toolbarSeparator}></div>
                  <button
                    type="button"
                    onClick={() => {
                      if (descriptionEditableRef.current) {
                        descriptionEditableRef.current.focus();
                        document.execCommand('formatBlock', false, '<h2>');
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Heading"
                  >
                    H2
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (descriptionEditableRef.current) {
                        descriptionEditableRef.current.focus();
                        document.execCommand('formatBlock', false, '<p>');
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Paragraph"
                  >
                    P
                  </button>
                  <div className={styles.toolbarSeparator}></div>
                  <button
                    type="button"
                    onClick={() => {
                      if (descriptionEditableRef.current) {
                        descriptionEditableRef.current.focus();
                        document.execCommand('insertUnorderedList', false, null);
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Bullet List"
                  >
                    •
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (descriptionEditableRef.current) {
                        descriptionEditableRef.current.focus();
                        document.execCommand('insertOrderedList', false, null);
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Numbered List"
                  >
                    1.
                  </button>
                  <div className={styles.toolbarSeparator}></div>
                  <button
                    type="button"
                    onClick={() => {
                      if (descriptionEditableRef.current) {
                        descriptionEditableRef.current.focus();
                        const url = prompt('Enter URL:');
                        if (url) {
                          document.execCommand('createLink', false, url);
                        }
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Insert Link"
                  >
                    🔗
                  </button>
                </div>
                <div
                  ref={descriptionEditableRef}
                  contentEditable
                  className={styles.richTextContent}
                  onInput={(e) => {
                    const html = e.target.innerHTML.trim();
                    // Only update if not empty or if it's different from current value
                    if (html || html !== formData.description) {
                      setFormData({ ...formData, description: html || '' });
                    }
                  }}
                  onBlur={(e) => {
                    // Also update on blur to ensure we capture the final state
                    const html = e.target.innerHTML.trim();
                    setFormData(prev => ({ ...prev, description: html || '' }));
                  }}
                  suppressContentEditableWarning={true}
                />
              </div>
              <p className={styles.richTextHint}>
                Use the toolbar above to format your description, or type HTML directly. The description supports HTML tags.
              </p>
            </div>

            <div className={styles.formGroup}>
              <label>Content (optional - HTML supported)</label>
              <div className={styles.richTextEditor}>
                <div className={styles.richTextToolbar}>
                  <button
                    type="button"
                    onClick={() => {
                      if (contentEditableRef.current) {
                        contentEditableRef.current.focus();
                        document.execCommand('bold', false, null);
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Bold"
                  >
                    <strong>B</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (contentEditableRef.current) {
                        contentEditableRef.current.focus();
                        document.execCommand('italic', false, null);
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Italic"
                  >
                    <em>I</em>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (contentEditableRef.current) {
                        contentEditableRef.current.focus();
                        document.execCommand('underline', false, null);
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Underline"
                  >
                    <u>U</u>
                  </button>
                  <div className={styles.toolbarSeparator}></div>
                  <button
                    type="button"
                    onClick={() => {
                      if (contentEditableRef.current) {
                        contentEditableRef.current.focus();
                        document.execCommand('formatBlock', false, '<h2>');
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Heading"
                  >
                    H2
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (contentEditableRef.current) {
                        contentEditableRef.current.focus();
                        document.execCommand('formatBlock', false, '<p>');
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Paragraph"
                  >
                    P
                  </button>
                  <div className={styles.toolbarSeparator}></div>
                  <button
                    type="button"
                    onClick={() => {
                      if (contentEditableRef.current) {
                        contentEditableRef.current.focus();
                        document.execCommand('insertUnorderedList', false, null);
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Bullet List"
                  >
                    •
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (contentEditableRef.current) {
                        contentEditableRef.current.focus();
                        document.execCommand('insertOrderedList', false, null);
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Numbered List"
                  >
                    1.
                  </button>
                  <div className={styles.toolbarSeparator}></div>
                  <button
                    type="button"
                    onClick={() => {
                      if (contentEditableRef.current) {
                        contentEditableRef.current.focus();
                        const url = prompt('Enter URL:');
                        if (url) {
                          document.execCommand('createLink', false, url);
                        }
                      }
                    }}
                    className={styles.toolbarButton}
                    title="Insert Link"
                  >
                    🔗
                  </button>
                </div>
                <div
                  ref={contentEditableRef}
                  contentEditable
                  className={styles.richTextContent}
                  onInput={(e) => {
                    const html = e.target.innerHTML.trim();
                    // Only update if not empty or if it's different from current value
                    if (html || html !== formData.content) {
                      setFormData({ ...formData, content: html || '' });
                    }
                  }}
                  onBlur={(e) => {
                    // Also update on blur to ensure we capture the final state
                    const html = e.target.innerHTML.trim();
                    setFormData(prev => ({ ...prev, content: html || '' }));
                  }}
                  suppressContentEditableWarning={true}
                />
              </div>
              <p className={styles.richTextHint}>
                Use the toolbar above to format your content, or type HTML directly. The content supports HTML tags.
              </p>
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

