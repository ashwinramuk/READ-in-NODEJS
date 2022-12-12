if(process.argv.length===3) console.log("Hello "+process.argv[2])
else if(process.argv.length>3) {
    let name='';
    for(let i=2;i<process.argv.length;i++) {
        name += process.argv[i]+" "
    } console.log("Hello "+name);
}