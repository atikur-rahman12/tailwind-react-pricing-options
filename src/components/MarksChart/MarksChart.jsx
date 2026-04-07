import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student ={
            id: studentData.id,
            name: studentData.name,
            physics: studentData.physics,
            chemistry: studentData.chemistry,
            math: studentData.math,
        }
        const averageMarks = (student.physics + student.chemistry + student.math) / 3;
        student.averageMarks = averageMarks;

        return student;
    });

    console.log(marksChartData);

    return (
        <div>
            <BarChart width={600} height={300} data={marksChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="averageMarks" fill="#8884d8" />
                <Bar dataKey="physics" fill="#82ca9d" />
                <Bar dataKey="chemistry" fill="#ffc658" />
                <Bar dataKey="math" fill="#ff7300" />
            </BarChart>
        </div>
    );
};

export default MarksChart;