import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Search, Download, Music } from 'lucide-react-native';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#1a1a1a', '#121212']}
        style={styles.headerGradient}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }}
          style={styles.headerImage}
        />
        <Text style={styles.title}>Music Player</Text>
        <Text style={styles.subtitle}>Your favorite music, anywhere</Text>
      </LinearGradient>

      <View style={styles.featuresContainer}>
        <View style={styles.featureCard}>
          <Search size={32} color="#fff" />
          <Text style={styles.featureTitle}>Search Music</Text>
          <Text style={styles.featureDescription}>
            Search and discover songs online
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Download size={32} color="#fff" />
          <Text style={styles.featureTitle}>Download</Text>
          <Text style={styles.featureDescription}>
            Download your favorite songs for offline listening
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Music size={32} color="#fff" />
          <Text style={styles.featureTitle}>Play Anywhere</Text>
          <Text style={styles.featureDescription}>
            Listen to your music anytime, anywhere, even offline
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerGradient: {
    padding: 20,
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  featuresContainer: {
    padding: 20,
  },
  featureCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});