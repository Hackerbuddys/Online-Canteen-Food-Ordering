import React, { Component } from "react";
import { Widget, addResponseMessage, setQuickButtons } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const buttons = [
  { label: "Complaint", value: "complaint" },
  { label: "Help Center", value: "help" },
  { label: "Customer Care", value: "care" },
  { label: "Order Food", value: "order" }, // New button for ordering food
];

export class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrdering: false, // Initialize the state variable
    };
  }

  componentDidMount() {
    addResponseMessage("Welcome to our restaurant!");
    setQuickButtons(buttons);
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    const message = newMessage.toLowerCase();

    if (message.includes("complaint")) {
      this.handleComplaint();
    } else if (message.includes("help")) {
      this.handleHelpCenter();
    } else if (message.includes("care")) {
      this.handleCustomerCare();
    } else if (message.includes("order")) {
      // Handle order food
      this.handleOrderFood();
    } else if (this.state.isOrdering) {
      // Check if user is ordering food
      this.handleOrderConfirmation(newMessage); // Handle order confirmation
    } else {
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
    this.setState({ isOrdering: true }); // Set flag to indicate ordering food
    addResponseMessage("Sure! What would you like to order?");
    setQuickButtons([]); // Clear quick buttons for ordering
  };

  handleOrderConfirmation = (foodName) => {
    addResponseMessage(
      `Thank you for ordering ${foodName}! Your order has been placed.`
    );
    setQuickButtons(buttons); // Set quick buttons back
    this.setState({ isOrdering: false }); // Reset ordering flag
  };

  handleQuickButtonClicked = (data) => {
    console.log(data);
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
