const { DateTime } = require("luxon");
const NowString = DateTime.now().toFormat("Сегодня: dd/MM/yyyy, время: HH:mm:ss")
const NewYear = DateTime.fromISO('2024-01-01')
console.log(NowString)
let NowFordiff = DateTime.now()
let NowForCompare = DateTime.now()

while(true)
{
    Future = DateTime.now()
    if(NowForCompare.startOf('second')<Future.startOf('second'))
    {
        process.stdout.write("\r\x1b[K")
        let DaysUntilNewYear = NewYear.diff(NowFordiff)
        DaysUntilNewYear = DaysUntilNewYear.toFormat("Осталось d дней, и  hh:mm:ss")
        process.stdout.write(DaysUntilNewYear);
        NowForCompare = Future
        NowFordiff = DateTime.now()
    }
}