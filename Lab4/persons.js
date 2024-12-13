const ages = (persons) => {
    const res = {};
    for (let person in persons)
    {
        const {born, died} = persons[person];
        res[person] = died - born;
    }
    return res;
}

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));