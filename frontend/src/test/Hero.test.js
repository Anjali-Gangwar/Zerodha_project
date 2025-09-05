import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

//Test Suit -> multiple test cases ek sath de sakte hain
describe("Hero component",()=>{
    test("renders hero image ",()=>{
        render(<Hero/>);
        const HeroImage = screen.getByAltText("Hero");
        expect(HeroImage).toBeInTheDocument();
        expect(HeroImage).toHaveAttribute("src",'media/images/homeHero.png')
    });
});