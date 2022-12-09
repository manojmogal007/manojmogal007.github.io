import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const Calender = () => {
  return (
    <div style={{paddingTop:'50px'}}>
        <GitHubCalendar username="manojmogal007" 
        blockSize={15}
        blockMargin={5}
        fontSize={14}
        style={{margin:'auto'}}
        />
    </div>
  )
}

export default Calender