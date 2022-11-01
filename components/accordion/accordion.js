import React, { useRef, useState } from 'react';
import AccordionStyled from './accordion.styled';
import PlusIcon from '../../assets/PlusIcon';
import Table from '../table';

const faqs = [
  {
    id: 1,
    header: 'PARTICIPATING BREWERIES & BEERS',
    content: <Table />,
  },
  {
    id: 2,
    header: 'FESTIVAL MAP',
    content: <h1>AAA</h1>,
  },
  {
    id: 3,
    header: 'LIVE MUSIC',
    content: <h1>AAA</h1>,
  },
  {
    id: 4,
    header: 'FOOD & CRAFT VENDORS',
    content: <h1>AAA</h1>,
  },
  {
    id: 5,
    header: '2022 EVENT PARTNERS',
    content: <h1>AAA</h1>,
  },
];

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

const Accordion = () => {
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
          {faqs.map((faq, index) => {
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
