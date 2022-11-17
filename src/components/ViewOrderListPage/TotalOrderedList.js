import Accordion from "react-bootstrap/Accordion";

import OrderDetailItem from "./OrderDetailItem";

import order_list from "../../data/order_list.json";

const componenetStyle = {
  marginTop: "30px"
}

const TotalOrderedList = ({ changeSetCurrentViewOrder }) => {
  const dayList = [];

  order_list.map(data => {
    if (!dayList.includes(data.date.split(" ")[0])) {
      dayList.push(data.date.split(" ")[0]);
    }
  });

  return (
    <div id="component-total-ordered-list" style={componenetStyle}>
      <Accordion defaultActiveKey="0">
        {
          dayList.map((date, i) => {
            const dayOrderList = [];
            order_list.map(data => {
              if (data.date.split(" ")[0] === date) {
                dayOrderList.push(data);
              }
            });

            return (
              <Accordion.Item eventKey={i.toString()} key={i}>
                <Accordion.Header>{date}</Accordion.Header>
                <Accordion.Body>
                  {
                    dayOrderList.map((data, i) => {
                      return (
                        <OrderDetailItem
                          datetime={data.date}
                          menus={data.products}
                          cost={data.cost}
                          changeSetCurrentViewOrder={changeSetCurrentViewOrder}
                          key={i} />
                      );
                    })
                  }
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        }
      </Accordion>
    </div>
  );
}

export default TotalOrderedList;