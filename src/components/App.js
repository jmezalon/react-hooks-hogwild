import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Form from "./Form";
import hogs from "../porkers_data";
import HogsList from "./HogsList";

function App() {
	const [hogsData, setHogsData] = useState(hogs)
	const [greased, setGreased] = useState('All')
	const [form, setForm] = useState(false)
	const [formData, setFormData] = useState({
		name: "",
		image: "",
		specialty: "",
		weight: "",
		greased: false,
		medal: ""
	})

	const filteredHog = hogsData.filter(hog => {
		if (greased === "All") {
			return true
		} else {
			return hog.greased === greased
		}
	})

	function handleChange(e) {
		const name = e.target.name 
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
		setFormData({...formData, [name]: value})
	}

	function handleSubmit(e) {
		e.preventDefault()
		setHogsData([formData, ...hogsData])
		setFormData({
			name: "",
			image: "",
			specialty: "",
			weight: "",
			greased: false,
			medal: ""
		})
		setForm(false)
	}

	return (
		<div className="App">
			<Nav />
			<Filter form={form} setForm={setForm} setGreased={setGreased} />
			{form ? <Form onHandleChange={handleChange} formData={formData} onHandleSubmit={handleSubmit} /> : null }
			<HogsList hogsData={filteredHog} />
		</div>
	);
}

export default App;
