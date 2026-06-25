import React, { useState, useEffect } from 'react';
import MemberCard from '../components/MemberCard';
import SectionTitle from '../components/SectionTitle';
import { 
  FaPalette, FaBook, FaBullhorn, FaHandsHelping, FaRunning,
  FaCalculator, FaUniversity, FaStore, FaLeaf, FaHeartbeat, FaLanguage, FaUserTie, FaUsers
} from 'react-icons/fa';
import { FiPlus, FiDownload, FiRefreshCw, FiX, FiCheck } from 'react-icons/fi';
import '../styles/Pages.css';
import { leadershipData } from '../data/leaders';

const iconMap = {
  "Executive Committee": <FaUserTie />,
  "Auditors": <FaCalculator />,
  "Fine Arts Wing": <FaPalette />,
  "Literary Wing": <FaBook />,
  "Library Board": <FaBook />,
  "Research Wing": <FaBullhorn />,
  "Saving Bank": <FaUniversity />,
  "Health Department": <FaHeartbeat />,
  "Store Board": <FaStore />,
  "Garden Committee": <FaLeaf />,
  "Social Affairs Board": <FaHandsHelping />,
  "Sports Wing": <FaRunning />,
  "Public Relations & IT Department": <FaBullhorn />,
  "Language Hub": <FaLanguage />
};

const getCategoryIcon = (title) => {
  return iconMap[title] || <FaUsers />;
};

const Leadership = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [leaders, setLeaders] = useState(() => {
    const saved = localStorage.getItem('musf_leaders');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved leaders", e);
      }
    }
    return {
      executive: leadershipData.executive,
      subCommittees: leadershipData.subCommittees.map(sub => ({
        title: sub.title,
        members: sub.members
      }))
    };
  });

  // Admin Verification States
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'
  const [editingMember, setEditingMember] = useState(null);
  
  // Form State
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formCategory, setFormCategory] = useState('executive');

  // Register secret keyboard shortcut Ctrl + Alt + A to trigger PIN prompt
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        if (isAdminMode) {
          setIsAdminMode(false);
        } else {
          setPinInput('');
          setPinError(false);
          setIsPinModalOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdminMode]);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pinInput === '1924') {
      setIsAdminMode(true);
      setIsPinModalOpen(false);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const saveToLocalStorage = (newLeaders) => {
    localStorage.setItem('musf_leaders', JSON.stringify(newLeaders));
    setLeaders(newLeaders);
  };

  const handleDelete = (memberId, category) => {
    if (window.confirm("Are you sure you want to delete this leader?")) {
      let newLeaders = { ...leaders };
      if (category === 'executive') {
        newLeaders.executive = newLeaders.executive.filter(m => m.id !== memberId);
      } else {
        newLeaders.subCommittees = newLeaders.subCommittees.map(sub => {
          if (sub.title === category) {
            return { ...sub, members: sub.members.filter(m => m.id !== memberId) };
          }
          return sub;
        });
      }
      saveToLocalStorage(newLeaders);
    }
  };

  const handleOpenAdd = (category) => {
    setModalMode('add');
    setEditingMember(null);
    setFormName('');
    setFormRole('');
    setFormImage('');
    setFormCategory(category);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (member, category) => {
    setModalMode('edit');
    setEditingMember({ ...member, category });
    setFormName(member.name || '');
    setFormRole(member.role || '');
    setFormImage(member.image || '');
    setFormCategory(category);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    let newLeaders = { ...leaders };
    
    const memberData = {
      id: modalMode === 'edit' ? editingMember.id : 'm_' + Date.now(),
      name: formName,
      role: formRole,
      image: formImage
    };

    // If category changed during edit, remove from old category
    if (modalMode === 'edit' && editingMember.category !== formCategory) {
      if (editingMember.category === 'executive') {
        newLeaders.executive = newLeaders.executive.filter(m => m.id !== editingMember.id);
      } else {
        newLeaders.subCommittees = newLeaders.subCommittees.map(sub => {
          if (sub.title === editingMember.category) {
            return { ...sub, members: sub.members.filter(m => m.id !== editingMember.id) };
          }
          return sub;
        });
      }
    }

    // Insert/update in new category
    if (formCategory === 'executive') {
      if (modalMode === 'edit' && editingMember.category === 'executive') {
        newLeaders.executive = newLeaders.executive.map(m => m.id === editingMember.id ? memberData : m);
      } else {
        newLeaders.executive = [...newLeaders.executive, memberData];
      }
    } else {
      newLeaders.subCommittees = newLeaders.subCommittees.map(sub => {
        if (sub.title === formCategory) {
          if (modalMode === 'edit' && editingMember.category === formCategory) {
            return { ...sub, members: sub.members.map(m => m.id === editingMember.id ? memberData : m) };
          } else {
            return { ...sub, members: [...sub.members, memberData] };
          }
        }
        return sub;
      });
    }

    saveToLocalStorage(newLeaders);
    setIsModalOpen(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      alert("Image file size should be less than 1MB to ensure smooth local storage performance.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormImage(event.target.result); // Base64 string
    };
    reader.onerror = (err) => {
      console.error("FileReader error:", err);
      alert("Failed to load image file.");
    };
    reader.readAsDataURL(file);
  };

  const handleExportCode = () => {
    let codeString = `import React from 'react';\nimport {\n    FaPalette, FaBook, FaBullhorn, FaHandsHelping, FaRunning,\n    FaCalculator, FaUniversity, FaStore, FaLeaf, FaHeartbeat, FaLanguage, FaSearch\n} from 'react-icons/fa';\n\nexport const leadershipData = {\n    executive: ${JSON.stringify(leaders.executive, null, 8)},\n    subCommittees: [\n`;

    leaders.subCommittees.forEach(sub => {
      let iconElementStr = '';
      switch (sub.title) {
        case 'Auditors': iconElementStr = '<FaCalculator />'; break;
        case 'Fine Arts Wing': iconElementStr = '<FaPalette />'; break;
        case 'Literary Wing': iconElementStr = '<FaBook />'; break;
        case 'Library Board': iconElementStr = '<FaBook />'; break;
        case 'Research Wing': iconElementStr = '<FaBullhorn />'; break;
        case 'Saving Bank': iconElementStr = '<FaUniversity />'; break;
        case 'Health Department': iconElementStr = '<FaHeartbeat />'; break;
        case 'Store Board': iconElementStr = '<FaStore />'; break;
        case 'Garden Committee': iconElementStr = '<FaLeaf />'; break;
        case 'Social Affairs Board': iconElementStr = '<FaHandsHelping />'; break;
        case 'Sports Wing': iconElementStr = '<FaRunning />'; break;
        case 'Public Relations & IT Department': iconElementStr = '<FaBullhorn />'; break;
        case 'Language Hub': iconElementStr = '<FaLanguage />'; break;
        default: iconElementStr = '<FaBook />';
      }

      codeString += `        {\n            title: ${JSON.stringify(sub.title)},\n            icon: ${iconElementStr},\n            members: ${JSON.stringify(sub.members, null, 16).replace(/\n/g, '\n            ')}\n        },\n`;
    });

    codeString = codeString.slice(0, -2) + '\n    ]\n};\n';

    const blob = new Blob([codeString], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'leaders.jsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleResetDefaults = () => {
    if (window.confirm("Are you sure you want to reset all leaders back to defaults? All unsaved browser edits will be lost.")) {
      localStorage.removeItem('musf_leaders');
      setLeaders({
        executive: leadershipData.executive,
        subCommittees: leadershipData.subCommittees.map(sub => ({
          title: sub.title,
          members: sub.members
        }))
      });
    }
  };

  const categories = [
    { title: 'Executive Committee', value: 'executive' },
    ...leaders.subCommittees.map(sub => ({ title: sub.title, value: sub.title }))
  ];

  return (
    <div className="leadership-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10 flex flex-col items-center justify-between" style={{ gap: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 
              className="page-title text-white" 
              onDoubleClick={() => {
                if (isAdminMode) {
                  setIsAdminMode(false);
                } else {
                  setPinInput('');
                  setPinError(false);
                  setIsPinModalOpen(true);
                }
              }}
              style={{ cursor: 'default', userSelect: 'none' }}
              title="Double click to access settings"
            >
              Union Leadership
            </h1>
            <p className="page-subtitle text-white">The Executive Committee and Sub-Committees of MUSF.</p>
          </div>
        </div>
      </header>

      <div className="container section" style={{ paddingBottom: isAdminMode ? '120px' : '4rem' }}>

        {/* Executive Committee Section */}
        <div className="leadership-category-section" style={{ marginBottom: '4rem' }}>
          <div className="category-header-wrapper">
            <SectionTitle 
              title="Executive Committee" 
              icon={<FaUserTie />} 
              subtitle="The core administrative body steering MUSF initiatives." 
            />
            {isAdminMode && (
              <button onClick={() => handleOpenAdd('executive')} className="add-member-btn">
                <FiPlus size={16} /> Add Leader
              </button>
            )}
          </div>
          <div className="grid grid-4 leadership-section-grid">
            {leaders.executive && leaders.executive.map(leader => (
              <MemberCard
                key={leader.id}
                name={leader.name}
                role={leader.role}
                photo={leader.image}
                isAdminMode={isAdminMode}
                onEdit={() => handleOpenEdit(leader, 'executive')}
                onDelete={() => handleDelete(leader.id, 'executive')}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Departments Rendering */}
        {leaders.subCommittees && leaders.subCommittees.map((dept, index) => (
          <div key={index} className="leadership-category-section" style={{ marginBottom: '4rem' }}>
            <div className="category-header-wrapper">
              <SectionTitle 
                title={dept.title} 
                icon={getCategoryIcon(dept.title)} 
                subtitle={`Members of the ${dept.title} department.`} 
              />
              {isAdminMode && (
                <button onClick={() => handleOpenAdd(dept.title)} className="add-member-btn">
                  <FiPlus size={16} /> Add Leader
                </button>
              )}
            </div>
            <div className="grid grid-4 leadership-section-grid">
              {dept.members.map(leader => (
                <MemberCard
                  key={leader.id}
                  name={leader.name}
                  role={leader.role}
                  department={dept.title}
                  photo={leader.image}
                  isAdminMode={isAdminMode}
                  onEdit={() => handleOpenEdit(leader, dept.title)}
                  onDelete={() => handleDelete(leader.id, dept.title)}
                />
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* Sticky Bottom Admin Toolbar */}
      {isAdminMode && (
        <div className="admin-sticky-toolbar">
          <div className="toolbar-status">
            <div className="toolbar-status-dot"></div>
            <span>Admin Mode Active</span>
          </div>
          <button onClick={handleExportCode} className="toolbar-btn export-btn">
            <FiDownload size={15} /> Export leaders.jsx
          </button>
          <button onClick={handleResetDefaults} className="toolbar-btn reset-btn">
            <FiRefreshCw size={14} /> Reset to Defaults
          </button>
          <button onClick={() => setIsAdminMode(false)} className="toolbar-btn reset-btn" style={{ borderColor: '#ef4444', color: '#ef4444' }}>
            <FiX size={14} /> Exit Admin
          </button>
        </div>
      )}

      {/* Security Passcode Modal */}
      {isPinModalOpen && (
        <div className="admin-modal-overlay">
          <div className={`admin-modal-container ${pinError ? 'shake' : ''}`} style={{ maxWidth: '360px' }}>
            <div className="admin-modal-header">
              <h3>Admin Access Security</h3>
              <button onClick={() => setIsPinModalOpen(false)} className="modal-close-btn">
                <FiX />
              </button>
            </div>
            <form onSubmit={handlePinSubmit} className="premium-contact-form" style={{ padding: '0' }}>
              <div className="admin-modal-body" style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', color: 'var(--color-text)' }}>
                  Enter the administrator passcode to unlock administrative features.
                </p>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <input 
                    type="password" 
                    value={pinInput} 
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      setPinError(false);
                    }} 
                    placeholder="••••" 
                    maxLength={10}
                    required 
                    className="form-control"
                    style={{ 
                      textAlign: 'center', 
                      fontSize: '2rem', 
                      letterSpacing: '10px', 
                      fontWeight: 'bold',
                      background: 'rgba(6, 78, 59, 0.03)',
                      borderColor: pinError ? '#ef4444' : 'var(--color-lightgray)'
                    }}
                    autoFocus
                  />
                  {pinError && (
                    <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: '600' }}>
                      Incorrect passcode. Please try again.
                    </p>
                  )}
                </div>
                <div className="form-actions" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
                  <button type="button" onClick={() => setIsPinModalOpen(false)} className="btn btn-outline">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Unlock
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add / Edit Member Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-container">
            <div className="admin-modal-header">
              <h3>{modalMode === 'add' ? 'Add New Leader' : 'Edit Leader Details'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="modal-close-btn">
                <FiX />
              </button>
            </div>
            <form onSubmit={handleModalSubmit} className="premium-contact-form" style={{ padding: '0' }}>
              <div className="admin-modal-body">
                <div className="form-group">
                  <label htmlFor="modal-name">Leader Name</label>
                  <input 
                    type="text" 
                    id="modal-name" 
                    value={formName} 
                    onChange={(e) => setFormName(e.target.value)} 
                    placeholder="Enter name" 
                    required 
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-role">Role / Position</label>
                  <input 
                    type="text" 
                    id="modal-role" 
                    value={formRole} 
                    onChange={(e) => setFormRole(e.target.value)} 
                    placeholder="e.g. Coordinator, General Secretary" 
                    required 
                    className="form-control"
                  />
                </div>
                
                {/* Photo Uploader */}
                <div className="form-group">
                  <label>Leader Profile Image</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: 'var(--color-offwhite)',
                      border: '2px solid var(--color-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      flexShrink: 0
                    }}>
                      {formImage ? (
                        <img src={formImage} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text)', opacity: 0.6 }}>No Photo</span>
                      )}
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        style={{ display: 'none' }}
                        id="modal-file-upload"
                      />
                      <label htmlFor="modal-file-upload" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', margin: 0, padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                        <FiPlus size={14} /> Upload Image
                      </label>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text)', opacity: 0.6, marginTop: '0.25rem' }}>
                        Supports PNG, JPG, JPEG (Max 1MB recommended)
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input 
                      type="text" 
                      value={formImage} 
                      onChange={(e) => setFormImage(e.target.value)} 
                      placeholder="Or enter image URL/path manually" 
                      className="form-control"
                      style={{ fontSize: '0.85rem' }}
                    />
                    {formImage && (
                      <button 
                        type="button" 
                        onClick={() => setFormImage('')} 
                        className="btn btn-outline" 
                        style={{ padding: '0.6rem 0.8rem', minWidth: 'unset', borderColor: '#ef4444', color: '#ef4444' }}
                        title="Clear Image"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-category">Department / Group</label>
                  <select 
                    id="modal-category" 
                    value={formCategory} 
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="form-control"
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-lightgray)' }}
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.title}</option>
                    ))}
                  </select>
                </div>
                <div className="form-actions">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <FiX size={15} /> Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <FiCheck size={15} /> {modalMode === 'add' ? 'Add Member' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leadership;
