import React, { useRef, useState } from 'react';
import AccordionStyled from './accordion.styled';
import PlusIcon from '../../assets/PlusIcon';

const AccordionItem = props => {
  const contentEl = useRef(null);
  const { handleToggle, active, faq } = props;
  const { header, id, content } = faq;

  return (
    <div className={`rc-accordion-card ${active === id ? 'active' : ''}`}>
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title">
            {header}
            <div className="icon-wrapper">
              <PlusIcon />
            </div>
          </h5>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={active === id ? { height: contentEl.current?.scrollHeight } : { height: '0px' }}
      >
        <div className="rc-accordion-body">{content}</div>
      </div>
    </div>
  );
};

const Accordion = props => {
  const [active, setActive] = useState(1);

  const handleToggle = index => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <AccordionStyled>
      <div className="">
        <div className="card-body">
          {props.items.map((faq, index) => {
            return (
              <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
            );
          })}
        </div>
      </div>
    </AccordionStyled>
  );
};

export default Accordion;
