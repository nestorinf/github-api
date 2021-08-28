import express from 'express'


export const start = ():void =>  {
    const app:express.Application = express()

    try {
        app.listen(4000, () => {
            console.log('started server express '+4000)
        })        
    } catch (err) {
        process.exit(1)
        console.log(err)
    }
}
