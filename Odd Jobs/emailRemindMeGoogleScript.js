function emailAlert() {
    // HELPER FUNCTIONS
    function remindMe(d=0,w=0,m=0,y=0) {
        const reminder = new Date()
        if (d > 0) {reminder.setDate(reminder.getDate() + d)}
        if (w > 0) {reminder.setDate(reminder.getDate() + w*7)}
        if (m > 0) {reminder.setMonth(reminder.getMonth() + m)}
        if (y > 0) {reminder.setFullYear(reminder.getFullYear() + y)}
        return reminder
    }
  
    function compareDates(d1, d2) {
        if (   d1.getMonth() === d2.getMonth() 
            && d1.getDate() === d2.getDate()
            && d1.getFullYear() === d2.getFullYear()
        ) { return true }
    }
  
    // DATA VALIDATION
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = sheet.getSheetValues(1,1,-1,-1)
    const thead = data[0]
    let expireCol
    let notifyCol
    let messageCol
    let remindCol
    let projectCol
    let bvaCol
    for (let i = 0; i < thead.length; i++) {
      let col = thead[i].toLowerCase()
      if (col === 'end date') {expireCol = i}
      if (col === 'notify') {notifyCol = i}
      if (col === 'message') {messageCol = i}
      if (col === 'reminder') {remindCol = i}
      if (col.includes('project')) {projectCol = i}
      if (col === 'bva') {bvaCol = i}
    }
    if ( !expireCol || !notifyCol || !remindCol ) {
      throw new Error('Missing critical column')
    }
    
    // SEND REMINDERS
    for (let i = 1; i < data.length; i++) {
        const row = data[i];
    
        const reminder = row[remindCol].match(/([0-9]+)\s(\w+)/)
        if (reminder == null) {continue}
        const value = Number(reminder[1])
        const unit = reminder[2].toLowerCase()
        
        let alertDate
        if (unit.includes('year')) {alertDate = remindMe(0,0,0,value)}
        if (unit.includes('month')) {alertDate = remindMe(0,0,value,0)}
        if (unit.includes('week')) {alertDate = remindMe(0,value,0,0)}
        if (unit.includes('day')) {alertDate = remindMe(value,0,0,0)}
    
        const expirationDate = row[expireCol]
    
        if (compareDates(alertDate,expirationDate)) {
            let message = row[messageCol]

            let recipients = row[notifyCol].replace(/(,|;)/,' ').match(/[a-z,0-9,.,_,-,+]+@[a-z,0-9,-,.]+/ig)

            let subject = 'Reminder: Project ' 
                + row[projectCol] 
                + ' is expiring '
                + Utilities.formatDate(expirationDate, 'GMT', 'MM/dd/yyyy')
                + ' with a BvA of ' 
                + row[bvaCol]
    
            for (email of recipients) {
                MailApp.sendEmail(email, subject, message)
                Logger.log('notified ' + email)
            }
        }
    }
}