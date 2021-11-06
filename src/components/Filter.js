function Filter({ setGreased, form, setForm }) {
    return (
        <div style={{padding:"15px 15px"}}>
            <button onClick={() => setForm(!form)} style={{margin:"5px", width: "100px"}}>{!form ? "Add Piggy" : "Cancel"}</button>
			<button style={{margin:"5px", width:"100px"}} onClick={() => setGreased("All")}>All</button>
			<button onClick={() => setGreased(true)} style={{margin:"5px", width: "100px"}}>Greased</button>
			<button onClick={() => setGreased(false)} style={{margin:"5px", width:"100px"}}>Not Greased</button>
		</div>
    )
}

export default Filter