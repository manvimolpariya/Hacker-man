let arr = [`Hacking User....${"<br>"}`, 'Username:', `${"<br>"}Password:*********`, `${"<br>"}number :91+**********`,
`${"<br>"}getting device info...`, `${"<br>"}resetting password...`,
`${"<br>"}hacking status:hacked! successfully :)${"<br>"}`];
let a = `01011111101010111111111111111111101${"<br>"}
0000000000000100000000000000000001${"<br>"}
11011111111111111100000000000101011${"<br>"}
0101010101010101010101010101001011${"<br>"}
01010101011111101010111111111111111${"<br>"}
0000000000000000001000000000000001${"<br>"}
00000111101111111111111110000000011${"<br>"}
1010101010101010101010101010101011${"<br>"}
10101010101010101111110101011111111${"<br>"}
1111100000000000000000000010000000${"<br>"}
00000000000011110111111111111111001${"<br>"}
0000000001010101010101010101010101${"<br>"}
0101010101010101001011010101010101${"<br>"}
10101111110101011111111111111111110${"<br>"}
0000000000000000000001000000000001${"<br>"}
00000000000000000111101111111111101${"<br>"}
1100000000000101010101010101010101${"<br>"}
1010101010101010101001011010101011${"<br>"}
01010101111110101011111111111111111${"<br>"}
1100000000000000000000010000000001${"<br>"}
00000000000000000111101111111111101${"<br>"}
1100000000000101010101010101010101${"<br>"}
1010101010101010101001011010101011${"<br>"}
0101001010101001011111101010101110${"<br>"}
0101010100101101011000100010001001${"<br>"}
0101000000000000000111101010101010${"<br>"}
0101010100101101011000100010001001${"<br>"}`
let b = `0000001010101000001010101010110000${"<br>"}
10101111111000000000011111111011110${"<br>"}
00000111101111111111111110000000011${"<br>"}
1010101010101010101010101010101011${"<br>"}
10101010101010101111110101011111111${"<br>"}
1111100000000000000000000010000000${"<br>"}
11011111111111111100000000000101011${"<br>"}
0101010101010101010101010101001011${"<br>"}
01010101011111101010111111111111111${"<br>"}
0000000000000000001000000000000001${"<br>"}
00000000000011110111111111111111001${"<br>"}
0000000001010101010101010101010101${"<br>"}
0101010101010101001011010101010101${"<br>"}
10101111110101011111111111111111110${"<br>"}
0000000000000000000001000000000001${"<br>"}
00000000000000000111101111111111101${"<br>"}
1100000000000101010101010101010101${"<br>"}
1010101010101010101001011010101011${"<br>"}
0101001010101001011111101010101110${"<br>"}
0101010100101101011000100010001001${"<br>"}
0101000000000000000111101010101010${"<br>"}
0101010100101101011000100010001001${"<br>"}
1010101010101010101001011010101011${"<br>"}
01010101111110101011111111111111111${"<br>"}
1100000000000000000000010000000001${"<br>"}
00000000000000000111101111111111101${"<br>"}
1100000000000101010101010101010101${"<br>"}`;
//  const sleep=async(seconds)=>{
//     return new Promise((res,rej)=>{
//            setTimeout(()=>{res(true)},seconds*1000)
//     })
//  }
//arr[1] += arr.splice(2,0,(document.getElementById('username').value));
function HackingProcess() {
    let variable = document.getElementById('username').value;
    let insta = document.getElementById('insta');
    let fb = document.getElementById('fb');
    let twitter = document.getElementById('twitter');
    if (variable == '') throw 'exit';
    if (twitter.checked && fb.checked && insta.checked) {
        arr.push(`${variable}'s all  Account are hacked!!`)
        const hack = async (message) => {
            // await sleep(2)
            // console.log(message)
            return new Promise((res, rej) => {
                setTimeout(() => { res(true) }, 1500)
            })
        }
        (async () => {
            for (let i = 0; i < arr.length; i++) {
                setTimeout(() => { changinText() }, 1000)
                await hack(arr[i]);
                document.getElementById('pera').innerHTML += arr[i];
                if (arr[i] == arr[1]) {
                    document.getElementById('pera').innerHTML += variable;
                }
            }
            setTimeout(() => { clear() }, 5000);
        })
            ()
    }
    else if (twitter.checked || fb.checked || insta.checked) {
        const hack = async (message) => {
            // await sleep(2)
            // console.log(message)
            return new Promise((res, rej) => {
                setTimeout(() => { res(true) }, 1500)
            })
        }
        (async () => {
            for (let i = 0; i < arr.length; i++) {
                setTimeout(() => { changinText() }, 1000)
                if (arr.length > 7) {
                    arr.pop();
                }
                await hack(arr[i]);
                document.getElementById('pera').innerHTML += arr[i];
                if (arr[i] == arr[1]) {
                    document.getElementById('pera').innerHTML += variable;
                }
            }
            setTimeout(() => { clear() }, 5000);
        })
            ()
    }
}

function clear() {
    document.getElementById('pera').innerHTML = '';
    document.getElementById('box1-pera').innerHTML = '';
    document.getElementById('box2-pera').innerHTML = '';
    document.getElementById('username').value = '';
    document.getElementById('insta').checked = false;
    document.getElementById('fb').checked = false;
    document.getElementById('twitter').checked = false;
}
function changinText() {
    let temp = document.getElementById('box1-pera');
    let temp1 = document.getElementById('box2-pera');
    if (temp.innerHTML == '' && temp1.innerHTML == '') {
        document.getElementById('box1-pera').innerHTML = a;
        document.getElementById('box2-pera').innerHTML = a;
    }
    if (temp.innerHTML == a) {
        document.getElementById('box1-pera').innerHTML = b;
        document.getElementById('box2-pera').innerHTML = b;
    }
    else {
        document.getElementById('box1-pera').innerHTML = a;
        document.getElementById('box2-pera').innerHTML = a;
    }
}

