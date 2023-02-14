module.exports = function toReadable (number) {
    let numstr = number.toString()
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const arr2 = {
      10:'ten',
      11:'eleven',
      12:'twelve',
      13:'thirteen',
      14:'fourteen',
      15:'fifteen',
      16:'sixteen',
      17:'seventeen',
      18:'eighteen',
      19:'nineteen'
    }

    const arr3 = {
      20:'twenty',
      30:'thirty',
      40:'forty',
      50:'fifty',
      60:'sixty',
      70:'seventy',
      80:'eighty',
      90:'ninety'

    }
    if (number<10) {
      arr.forEach(function (item, index){
        if (index===number) {
          aa=(item)
        }
      })
      return aa
    }
    if (number<20) {
      for(let key in arr2){
        if(Number(key)===number){
          bb=(arr2[key])
        }
      }
      return bb
    }
r = ''
    if (number>19 && number<100 && number!=20 && number!=30 && number!=40 && number!=50 && number!=60 && number!=70 && number!=80 && number!=90) {
      for (let key in arr3){
        arr.forEach(function (item, index){
          if (key[0]===numstr[0] && index===Number(numstr[1])){
          cc = (r+arr3[key]+' '+item)
          }
        })
      }
      return cc
    } else if (number===20 || number===30 || number===40 || number===50 || number===60 || number===70 || number===80 || number===90) {
      for (let key in arr3) {
        if (Number(key)===number) {
         dd = (arr3[key])
        }
      }
      return dd
    }

    if (number>99 && number<1000&& Number(numstr[1])===1 && number!=100 && number!=200 && number!=300 && number!=400 && number!=500 && number!=600 && number!=700 && number!=800 && number!=900){
      arr.forEach(function (item2,index2){
        for (let key1 in arr2){
          if (index2===Number(numstr[0]) && key1===numstr[1]+numstr[2]){
             a = (item2 + ' hundred '+arr2[key1])
            }
        }
      })
      return a
    }

    if (number>99 && number<1000 && number!=100 && Number(numstr[1])!=0 && Number(numstr[2])!=0&& number!=200 && number!=300 && number!=400 && number!=500 && number!=600 && number!=700 && number!=800 && number!=900){
        arr.forEach(function (item,index){
            for (let key in arr3){
              arr.forEach(function (item1, index1){
                if ( index===Number(numstr[0]) && key[0]===numstr[1] && index1===Number(numstr[2])){
                b = (item + ' hundred '+ r+arr3[key]+' '+item1)

                }
              })
            }

          })
          return b
      }


      if (number>99 && number<1000 && Number(numstr[1])===0 && Number(numstr[2])!=0 && number!=100 && number!=200 && number!=300 && number!=400 && number!=500 && number!=600 && number!=700 && number!=800 && number!=900){
        arr.forEach(function (item,index){

              arr.forEach(function (item1, index1){
                 if (index===Number(numstr[0]) && index1===Number(numstr[2])) {
                 c = (item + ' hundred '+item1)
                }

              })


          })
return c
    }

    if (number>99 && number<1000 && Number(numstr[2])===0 && number!=100 && number!=200 && number!=300 && number!=400 && number!=500 && number!=600 && number!=700 && number!=800 && number!=900){
        arr.forEach(function (item,index){

            for (let key in arr3) {
                if (index===Number(numstr[0]) && key===numstr[1]+numstr[2]) {
                    e = (item + ' hundred '+arr3[key])
                   }
              }

          })
return e

    }

    else if (number===100 || number===200 || number===300 || number===400 || number===500 || number===600 || number===700 || number===800 || number===900){
      arr.forEach(function (item,index){
                if (index===Number(numstr[0])) {
                  d = (item + ' hundred')

               }

         })
         return d
    }
}
