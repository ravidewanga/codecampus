const fs = require('fs');

const addStudent = (stdData)=>{

    const allRecords = getStudent();
    
    //------check duplicate record-----------
    const duplicateStudents = allRecords.filter((data) => data.contact_no === stdData.contact_no);
    
    if(duplicateStudents.length === 0){
        const jsonData = {
            name:stdData.name,
            contact_no:stdData.contact_no
        };
        
        allRecords.push(jsonData);

        saveStudentsData(allRecords);
        console.log('=====Add Students successfully.=======');
    }else{
        console.log('=== Contact no. already exist. ===');
    }
}

const removeStudent = (c_no)=>{
    const allRecords = getStudent();
    
    const studentsToKeep = allRecords.filter(function(data) {
        return data.contact_no !== c_no;
    });
    
    saveStudentsData(studentsToKeep);
    console.log('=====Record delete successfully.=======');

    console.log('=====Exist Record.=======');
    console.log(getStudent());
}   


const getStudent=()=>{
    try {
        const noteBuffer = fs.readFileSync('students.json');
        const noteString = noteBuffer.toString();
        const noteJSON = JSON.parse(noteString);
        return noteJSON;
    } catch(e) {
        return [];
    }
}


const saveStudentsData = (data)=>{
    const stringData = JSON.stringify(data);
    fs.writeFileSync('students.json',stringData);
}

module.exports = {
    addStudent,
    getStudent,
    removeStudent
}