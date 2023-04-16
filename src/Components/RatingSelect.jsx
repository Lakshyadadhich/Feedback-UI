// this is use to show the 1st table of rating 1 to 10 

function RatingSelect({ select, selected }) {
    // NOTE: We don't need local state here as it's a duplicate of parent state
    // also no real need for useEffect or context
    // useEffect(() => {
    //   select(feedbackEdit.item.rating)
    // }, [feedbackEdit])
  
    const handleChange = (e) => {
      select(+e.currentTarget.value)
       { /* to make it correct bole to jab bhi kisi no. pe click kre us pe click ho jay uske liye humne feebackform ki line no. 69 likhi */ }
    }
   
    // NOTE: simplified with iteration
    return (
      <ul className='rating'>
        {Array.from({ length: 10 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type='radio'
              id={`num${i + 1}`}
              name='rating'
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    )
  }
  
  export default RatingSelect