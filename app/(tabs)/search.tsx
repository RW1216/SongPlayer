import { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const searchSongs = async (query: string) => {
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for songs..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          if (text.length > 2) {
            searchSongs(text);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
});
