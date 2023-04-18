import React from 'react'
import From from './ExpencesForm'
import styles from '../../styles'

const NewExpence = (props) => {
  const saveExpenceData = (e) =>{
    const expenceData = {
      ...e,
      id: Math.random().toString()
    }
    props.enteredData(expenceData)
  }
  
  return (
    <div className={`${styles.flexs} bg-purple-600 p-[20px] mt-[26px] rounded-[26px] `}>
      <From onSaveExpenceData={saveExpenceData}/>
    </div>
  )
}

export default NewExpence