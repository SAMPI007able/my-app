import AdminLayout from "../../components/AdminLayout";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, Divider } from "react-native-paper";

const DashboardScreen = ({ navigation }) => {
  return (
    <AdminLayout navigation={navigation}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Add New SPOC</Title>
          <Paragraph>
            Written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Add SPOC</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Add New Executor</Title>
          <Paragraph>
            This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Add Executor</Button>
        </Card.Actions>
      </Card>
      <Divider style={styles.divider} bold={true}/>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Add New Project</Title>
          <Paragraph>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('ProjectCreation')}>Add Project</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Add New Unit</Title>
          <Paragraph>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('UnitCreation')}>Add Unit</Button>
        </Card.Actions>
      </Card>
    </AdminLayout>
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
