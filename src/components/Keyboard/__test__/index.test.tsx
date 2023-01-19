import React from "react";
import { render } from "@testing-library/react"
import KeyboardLayout from "../index";
import { first_row, second_row, third_row } from "../../../utils/constants";
import { describe, test, expect } from "vitest"
import { screen } from "@testing-library/react";

describe('Testing Keyboard Layout Component', ()=>{

    test("renders keys on keyboard", () =>{

        render(<KeyboardLayout />)

        expect(screen.getByText(first_row[2])).toBeInTheDocument()
        expect(screen.getByText(second_row[4])).toBeInTheDocument()
        expect(screen.getByText(third_row[4])).toBeInTheDocument()
    
    })

})
