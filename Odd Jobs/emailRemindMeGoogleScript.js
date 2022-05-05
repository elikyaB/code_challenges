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
        ) { return true } else { return false }
    }

    function getCellRefs(text) {
        if (text == null) {return ''}
        const refs = text.match(/\{\w+\}/g)
        if (refs != null) {
            const cols = refs.map((ref)=>{
                let colNum = 0
                ref.match(/\w/g).forEach((r,i) => {
                    colNum += (r[i].toUpperCase().charCodeAt()-65)+(26*i)
                })
                return colNum
            })
            for (let i=0; i<=refs.length; i++) {
                text = text.replace(refs[i], row[cols[i]])
            }
        }
        return text
    }
  
    // DATA VALIDATION
    const spread = SpreadsheetApp.getActiveSpreadsheet()
    const spreadName = spread.getName()
    const spreadUrl = spread.getUrl()
    const spreadOwner = spread.getOwner().getEmail()

    const sheet = SpreadsheetApp.getActiveSheet()
    const sheetName = sheet.getName()
    const data = sheet.getSheetValues(1,1,-1,-1)
    const thead = data[0]
    let expireCol
    let notifyCol
    let messageCol
    let remindCol
    let subjectCol
    for (let i = 0; i < thead.length; i++) {
      let col = thead[i].toLowerCase()
      if (col === 'end date') {expireCol = i}
      if (col === 'notify') {notifyCol = i}
      if (col === 'message') {messageCol = i}
      if (col === 'reminder') {remindCol = i}
      if (col === 'subject') {subjectCol = i}
    }
    if ( !expireCol || !remindCol ) {
      throw new Error('Missing critical column')
    }
    
    // SEND REMINDERS
    for (let i = 1; i < data.length; i++) {
        const row = data[i];

        const expirationDate = row[expireCol]
    
        const reminders = row[remindCol].match(/([0-9]+)\s(\w+)/g)
        if (reminders == null) {continue}
        for (reminder of reminders) {
            reminder = reminder.split(' ')
            const value = Number(reminder[0])
            const unit = reminder[1].toLowerCase()
        
            let alertDate
            unit.includes('day')     ? alertDate = remindMe(value,0,0,0)
            : unit.includes('week')  ? alertDate = remindMe(0,value,0,0)
            : unit.includes('month') ? alertDate = remindMe(0,0,value,0)
            : unit.includes('year')  ? alertDate = remindMe(0,0,0,value)
            : Logger.log('Reminder Typo: ' + unit)
        
            if (compareDates(alertDate,expirationDate)) {
                let message = messageCol ? getCellRefs(row[messageCol])
                    : 'Location: ' + sheetName + ' in ' + spreadName + ' \n'
                    + 'Link: ' + spreadUrl
                let recipients = notifyCol ? row[notifyCol]
                    .replace(/(,|;)/,' ')
                    .match(/[a-z,0-9,.,_,-,+]+@[a-z,0-9,-,.]+/ig)
                    : spreadOwner
                let subject = subjectCol ? getCellRefs(row[subjectCol])
                    : 'Reminder for ' + reminder.join(' ') + ' from now'
                for (email of recipients) {
                    MailApp.sendEmail(email, subject, message)
                    Logger.log('notified ' + email)
                }
            }
        }
    }
}