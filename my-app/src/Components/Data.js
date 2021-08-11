import data from '../Files/cpus.json'

class Data{
    getFrequency(){
        var datax = data;
        let freq = []

        for(let i=0;i<data.length;i++){
            let d = datax[i];
            freq.push(d.frequency)
        }
        return freq;
    }

    getPerUse(){
        var datax = data;
        let freq = []

        for(let i=0;i<data.length;i++){
            let d = datax[i];
            freq.push(d.Per_Use)
        }
        return freq;
    }

    getCores(){
        var datax = data;
        let freq = []

        for(let i=0;i<data.length;i++){
            let d = datax[i];
            freq.push(d.core)
        }
        return freq;
    }
}

export default new Data();