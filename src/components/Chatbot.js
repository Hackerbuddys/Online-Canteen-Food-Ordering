import React, { Component } from "react";
import { Widget, addResponseMessage, setQuickButtons } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const buttons = [
  { label: "Complaint", value: "complaint" },
  { label: "Help Center", value: "help" },
  { label: "Customer Care", value: "care" },
  { label: "Order Food", value: "order" },
];

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrdering: false,
    };
  }

  componentDidMount() {
    addResponseMessage("Welcome to our restaurant!");
    setQuickButtons(buttons);
  }

  handleNewUserMessage = (newMessage) => {
    const message = newMessage.toLowerCase();

    if (message.includes("complaint")) this.handleComplaint();
    else if (message.includes("help")) this.handleHelpCenter();
    else if (message.includes("care")) this.handleCustomerCare();
    else if (message.includes("order")) this.handleOrderFood();
    else if (this.state.isOrdering) this.handleOrderConfirmation(newMessage);
    else {
      addResponseMessage(
        "I'm sorry, I didn't understand that. How can I help you today?"
      );
      setQuickButtons(buttons);
    }
  };

  handleComplaint = () => {
    addResponseMessage(
      "What type of complaint do you want to register? (e.g., Food Quality, Service, Cleanliness)"
    );
    setQuickButtons([]);
  };

  handleHelpCenter = () => {
    addResponseMessage("How can I help you today?");
    setQuickButtons([]);
  };

  handleCustomerCare = () => {
    const randomPhoneNumber = Math.floor(Math.random() * 10000000000);
    addResponseMessage(`For customer care, please call: ${randomPhoneNumber}`);
    setQuickButtons([]);
  };

  handleOrderFood = () => {
    this.setState({ isOrdering: true });
    addResponseMessage("Sure! What would you like to order?");
    setQuickButtons([]);
  };

  handleOrderConfirmation = (foodName) => {
    addResponseMessage(
      `Thank you for ordering ${foodName}! Your order has been placed.`
    );
    setQuickButtons(buttons);
    this.setState({ isOrdering: false });
  };

  handleQuickButtonClicked = (data) => {
    setQuickButtons(buttons.filter((button) => button.value !== data));
    this.handleNewUserMessage(data);
  };

  render() {
    return (
      <div className="Chatbot">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          title="Restaurant Help Center"
          subtitle="How can we help you today?"
        />
      </div>
    );
  }
}

export default Chatbot;
