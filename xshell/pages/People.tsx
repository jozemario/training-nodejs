import React, { useState, useEffect } from 'react';

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://adventuretimeapi.herokuapp.com/people')
            .then((res) => res.json())
            .then((data) => setPeople(data));
    }, []);

    return (
        <div>
            <h1>People List</h1>
            {people.map((person: any, index) => (
                <div key={index}>{person.fullname}</div>
            ))}
        </div>
    );
};
export default People;
