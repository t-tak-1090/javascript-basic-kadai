const today = () => {
    const today2 = new Date();
    const year = today2.getFullYear();
    const month = today2.getMonth() + 1;
    const day = today2.getDate();
    console.log(year + "年" + month + "月" + day + "日");
}

today();