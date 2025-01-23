 // Update the sidebar content
  document.getElementById('sidebarContent').textContent = message;

  // Update the last visit date in localStorage
  localStorage.setItem('lastVisitDate', currentDate);


 // Get the current date and time
 const currentDate = new Date();

 // Format the current date and time (optional)
 const options = { 
   weekday: 'long', 
   year: 'numeric', 
   month: 'long', 
   day: 'numeric', 
   hour: 'numeric', 
   minute: 'numeric', 
   second: 'numeric' 
 };
 const formattedDate = currentDate.toLocaleDateString('en-US', options);

 // Update the current date element
 document.getElementById('currentDate').textContent = formattedDate;

 // Get the last modified date of the HTML document (if available)
 const lastModifiedDate = document.lastModified; 

 // Update the last modified element
 document.getElementById('lastModified').querySelector('span').textContent = lastModifiedDate;


 // Get the current date and time
 const currentD = new Date();
      
 // Get the last visit date from localStorage
 const lastVisitDateStr = localStorage.getItem('lastVisitDate');

 // If there's no last visit date stored, it's the first visit
 if (!lastVisitDateStr) {
   localStorage.setItem('lastVisitDate', currentDate);
   document.getElementById('sidebarContent').textContent = "Welcome! Let us know if you have any questions.";
 } else {
   // Calculate the time difference in milliseconds
   const lastVisitDate = new Date(lastVisitDateStr);
   const timeDiff = currentDate - lastVisitDate;

   // Calculate the number of days between visits
   const daysBetweenVisits = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

   let message;
   if (daysBetweenVisits === 0) {
     message = "Back so soon! Awesome!";
   } else if (daysBetweenVisits === 1) {
     message = "You last visited 1 day ago.";
   } else {
     message = `You last visited ${daysBetweenVisits} days ago.`;
   }

   // Update the sidebar content
   document.getElementById('sidebarContent').textContent = message;

   // Update the last visit date in localStorage
   localStorage.setItem('lastVisitDate', currentDate);
 }