//日期工具类
//局部导入dayjs
import dayjs from 'dayjs'

export const formatDateTime = (dateTimeString,flag = false) => {
    if(flag){
        return dayjs(dateTimeString).format('DD/MM/YYYY') + '\n' + dayjs(dateTimeString).format('HH:mm:ss');
    }else{
        return dayjs(dateTimeString).format('DD/MM/YYYY HH:mm:ss');
    }
}

export const formatDateTimeNotYearSimple = (dateTimeString,flag = false) => {
    if(flag){
        return dayjs(dateTimeString).format('DD/MM') + '\n' + dayjs(dateTimeString).format('HH:mm:ss');
    }else{
        return dayjs(dateTimeString).format('DD/MM HH:mm:ss');
    }
}

export const formatWord = (word) => {
    const formattedWord = word.replace(/[-\s]+/g, '\n');
    return formattedWord;
}

export const formatDate = (timespan) => {
    if (timespan) {
        // return dayjs(Number(timespan)).format("YYYY-MM-DD HH:mm:ss")
        return dayjs(Number(timespan)).format("DD/MM/YYYY HH:mm:ss");
    }
    return "";
}

export const formatDateNotYear = (timespan) => {
    if (timespan) {
        // return dayjs(Number(timespan)).format("YYYY-MM-DD HH:mm:ss")
        return dayjs(Number(timespan)).format("DD/MM HH:mm:ss");
    }
    return "";
}

export const formatDateSearch = (timespan) => {
    if (timespan) {
        // return dayjs(Number(timespan)).format("YYYY-MM-DD HH:mm:ss")
        return dayjs(Number(timespan)).format("YYYY-MM-DD HH:mm:ss");
    }
    return "";
}

export const formatDateSearchDate = (timespan) => {
    if (timespan) {
        // return dayjs(Number(timespan)).format("YYYY-MM-DD HH:mm:ss")
        return dayjs(Number(timespan)).format("YYYY-MM-DD 00:00:00");
    }
    return "";
}

export const formatDateNoYearSecond = (timespan) => {
    if (timespan) {
        // return dayjs(Number(timespan)).format("YYYY-MM-DD HH:mm:ss")
        return dayjs(Number(timespan)).format("MM-DD HH:mm");
    }
    return "";
}

export const formatMoney = (money) => {
    // 将money转换为数字类型
    money = parseFloat(money);
    // 使用toFixed()方法来保留两位小数并转换为字符串
    return money.toFixed(2);
}

export const toLowerCase = (str) => {
    return str.toLowerCase();
}
