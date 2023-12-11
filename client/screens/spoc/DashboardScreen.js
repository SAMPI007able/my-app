import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, Divider } from "react-native-paper";
import SPOCLayout from "../../components/SPOCLayout";

const DashboardScreen = ({ navigation }) => {
  return (
    <SPOCLayout navigation={navigation}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Add New Task</Title>
          <Paragraph>
            Written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('TaskCreation')}>Add Task</Button>
        </Card.Actions>
      </Card>

      <Divider style={styles.divider} bold={true}/>
      
    </SPOCLayout>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  divider: {
    marginBottom: 16
  }
});

export default DashboardScreen;
