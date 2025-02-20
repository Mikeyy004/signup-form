"use client"

import type React from "react"
import { useState } from "react"
import "./SignupForm.css"

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    captcha: false,
  })

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    captcha: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { ...errors }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    } else {
      newErrors.name = ""
    }

    if (!formData.surname.trim()) {
      newErrors.surname = "Surname is required"
      isValid = false
    } else {
      newErrors.surname = ""
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      isValid = false
    } else {
      newErrors.email = ""
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      isValid = false
    } else {
      newErrors.password = ""
    }

    if (!formData.captcha) {
      newErrors.captcha = "Please verify you are not a robot"
      isValid = false
    } else {
      newErrors.captcha = ""
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Here you would typically send the data to your server
    }
  }

  return (
    <div className="signup-form">
      <div className="form-header">
        <div className="logo">Z</div>
        <h2>Sign Up for Zenith</h2>
        <p>Join our community today</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John"
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Doe"
              required
            />
            {errors.surname && <span className="error">{errors.surname}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group checkbox">
          <input type="checkbox" id="captcha" name="captcha" checked={formData.captcha} onChange={handleChange} />
          <label htmlFor="captcha">I'm not a robot</label>
          {errors.captcha && <span className="error">{errors.captcha}</span>}
        </div>
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
      <div className="form-footer">
        <div>
          <a href="#">Terms</a> · <a href="#">Privacy</a> · <a href="#">Help</a>
        </div>
        <p>We respect your privacy. Your data is safe with us.</p>
      </div>
    </div>
  )
}

export default SignupForm

