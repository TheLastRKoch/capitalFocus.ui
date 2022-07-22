import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function BudgetToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );
  
    return (
      <b
        onClick={decoratedOnClick}
      >
        {children}
      </b>
    );
  }

export default BudgetToggle