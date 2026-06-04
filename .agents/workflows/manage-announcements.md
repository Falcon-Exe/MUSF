---
description: how to add or delete announcements
---

All announcements are stored in a single shared file: `src/data/announcements.js`.

### How to Add an Announcement
1. Open [announcements.js](file:///d:/MUSF/src/data/announcements.js).
2. Add a new object to the `announcementData` array. 
   - **Important**: Make sure to give it a unique `id`.
   - **Important**: Use both the `date` (formatted for the full page) and `day`/`month` (formatted for the home page square).
   - **Example**:
     ```javascript
     {
       id: 4,
       date: 'Apr 15, 2026',
       day: '15',
       month: 'APR',
       title: 'New Workshop',
       desc: 'Brief description here.',
       type: 'Event'
     },
     ```
3. Save the file. The changes will reflect on both the Home page and the Announcements page instantly.

### How to Delete an Announcement
1. Open [announcements.js](file:///d:/MUSF/src/data/announcements.js).
2. Locate the block `{ ... }` for the announcement you want to remove.
3. Delete that entire block (including the comma if needed).
4. Save the file.
