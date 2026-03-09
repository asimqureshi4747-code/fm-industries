import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    id : Text;
    name : Text;
    email : Text;
    phone : ?Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compareByTimestamp(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let submissions = Map.empty<Text, ContactSubmission>();

  func generateId(name : Text, timestamp : Time.Time) : Text {
    name # "_" # timestamp.toText();
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : ?Text, subject : Text, message : Text) : async Text {
    let timestamp = Time.now();
    let id = generateId(name, timestamp);

    let submission : ContactSubmission = {
      id;
      name;
      email;
      phone;
      subject;
      message;
      timestamp;
    };

    submissions.add(id, submission);
    id;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort(ContactSubmission.compareByTimestamp);
  };

  public query ({ caller }) func getSubmissionById(id : Text) : async ContactSubmission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };
};
