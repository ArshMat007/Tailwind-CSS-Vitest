import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import NoteFlowchart from "/src/components/FlowChart";


describe('NoteFlowchart', () => {
    it('renders correctly', () => {
        render(<NoteFlowchart />);
        expect(screen.getByText("User creates note")).toBeInTheDocument();
    });
});
