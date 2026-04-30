// Google Sheets Integration
// This script submits quiz responses to a Google Sheet via Google Apps Script

const SHEET_ID = '1r9lx4wkXq7UF300bmiXvHdWf-Mwl1I7uKIRmHAljoXY';
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/d/AKfycbx_placeholder/usercopy'; // Will be updated after creating Apps Script

// Function to submit data to Google Sheets
async function submitToGoogleSheets(email, quizType, result) {
    try {
        // For now, just log to console
        // This will be updated once we set up Google Apps Script
        console.log('Submitting to Google Sheets:', { email, quizType, result });
        
        // Store in localStorage as backup
        const submission = {
            email: email,
            quizType: quizType,
            result: result,
            timestamp: new Date().toISOString()
        };
        
        const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
        submissions.push(submission);
        localStorage.setItem('submissions', JSON.stringify(submissions));
        
        return true;
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        return false;
    }
}
