const { DateTime } = require("luxon");
let NowString = DateTime.now().toFormat("Сегодня: dd/MM/yyyy, время: HH:mm:ss")
let NewYear = DateTime.fromISO('2024-01-01')
console.log(NowString)
let Now = DateTime.now()
let now = DateTime.now()

while(true)
{
    Future = DateTime.now()
    if(now.startOf('second')<Future.startOf('second'))
    {
        process.stdout.write("\r\x1b[K")
        let DaysUntilNewYear = NewYear.diff(Now)
        DaysUntilNewYear = DaysUntilNewYear.toFormat("Осталось d дней, и  hh:mm:ss")
        process.stdout.write(DaysUntilNewYear);
        now = Future
        Now = DateTime.now()
    }
}