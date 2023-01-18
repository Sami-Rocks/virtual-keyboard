import React from "react";

import { render, screen } from "@testing-library/react"
import Key from "../index.js"


test("renders key component", () =>{
    render(<Key figure="ABC" />)

    expect(screen.getByText(/ABC/i)).toBeInTheDocument()
})