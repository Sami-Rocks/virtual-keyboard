import React from "react";

import { render } from "@testing-library/react"
import Key from "../index"
import { describe, test, expect } from "vitest"
import { screen } from "@testing-library/react";

describe('Testing Key Component', ()=>{

    test("renders key component", () =>{
        render(<Key figure="ABC" />)
    
        expect(screen.getByText(/ABC/i)).toBeInTheDocument()
    })

})
