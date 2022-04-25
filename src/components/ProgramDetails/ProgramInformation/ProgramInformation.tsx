import React from 'react'
import classes from './ProgramInformation.module.css'
import { PROGRAM_DUMMY_DATA } from '../../../DUMMY_DATA/dummyProgram'
import ProgramInformationItem from './ProgramInformationItem'



const ProgramInformation:React.FC=()=>{
    return(
        <React.Fragment>
            <div className={classes.section}>
            <h2>What's in my program?</h2>
            <ul className={classes.list}>
                {PROGRAM_DUMMY_DATA.map((program)=>{
                    return <ProgramInformationItem
                    key={program.id}
                    title={program.title}
                    paragraph={program.paragraph}
                    image={program.image}
                    />
                })}
            </ul>
            </div>
        </React.Fragment>
    )
}

export default ProgramInformation