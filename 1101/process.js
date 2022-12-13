// console.log(process);
// console.log(process.version);
// console.log(process.versions.node);
// {키 : 값}

// console.log(process.argv);
// process.exit(exitCode);
// process.exit(0);

process.argv.forEach((item, i) => {
    console.log(`${i} : ${item}`);
    if(item === "--test"){
        let timer = Number(process.argv[i+1]);
        setTimeout(() => {
            process.exit(0);
        }, timer);
    }
});
