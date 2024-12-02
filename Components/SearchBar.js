import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, TextInput } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleTextChange = (text) => {
    setSearchQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.inputContainer,
          pressed ? styles.pressed : null,
          isFocused ? styles.focused : null,
        ]}
        onPressIn={() => setIsFocused(true)}
        onPressOut={() => setIsFocused(false)}
      >
        <View style={styles.inputWrapper}>
          <Ionicons name="search" size={26} color="#ccc" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={handleTextChange}

            value={searchQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#f0f0f0",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    padding: 3,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.5,
  },
  focused: {
    borderColor: "#007aff",
    backgroundColor: "#f5f5f5",
  },
  searchIcon: {
    margin: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    padding: 8,
    fontSize: 20,
  },
});

export default SearchBar;