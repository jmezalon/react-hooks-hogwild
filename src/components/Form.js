function Form({ onHandleSubmit, onHandleChange, formData }) {
    return (
        <form className='piggy-form' onSubmit={onHandleSubmit}>
            <label>
                <input name="name" placeholder="piggy name" aria-label="name" type="text" value={formData.name} onChange={onHandleChange} />
            </label>
            <label>
                <input name="image" placeholder="image" aria-label="image" type="text" value={formData.image} onChange={onHandleChange} />
            </label>
            <label>
                <input name="specialty" placeholder="specialty" aria-label="specialty" type="text" value={formData.specialty} onChange={onHandleChange} />
            </label>
            <label>
                <input name="weight" placeholder="weight" aria-label="weight" type="number" value={formData.weight} onChange={onHandleChange} />
            </label>
            <label>Greased: 
                <input aria-label="greased" name="greased" type="checkbox" value={formData.checked} onChange={onHandleChange} />
            </label>
            <label>
                <input name="medal" placeholder="hightest Medal" aria-label="medal" type="text" value={formData.medal} onChange={onHandleChange} />
            </label>
            <input type="submit" value="New piggy" />
        </form>
    )
}

export default Form