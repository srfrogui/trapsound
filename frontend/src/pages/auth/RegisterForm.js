import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Page1 = ({ nextPage }) => (
  <View style={styles.page}>
    <Text>Página 1</Text>
    {/* Adicione os campos que você precisa para a página 1 */}
    <Button title="Próxima" onPress={nextPage} />
  </View>
);

const Page2 = ({ prevPage, nextPage }) => (
  <View style={styles.page}>
    <Text>Página 2</Text>
    {/* Adicione os campos que você precisa para a página 2 */}
    <Button title="Anterior" onPress={prevPage} />
    <Button title="Próxima" onPress={nextPage} />
  </View>
);

const Page3 = ({ prevPage }) => (
  <View style={styles.page}>
    <Text>Página 3</Text>
    {/* Adicione os campos que você precisa para a página 3 */}
    <Button title="Anterior" onPress={prevPage} />
  </View>
);

const Register = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pages = [Page1, Page2, Page3];

  const PageComponent = pages[currentPage];

  return (
    <ScrollView horizontal pagingEnabled>
      <PageComponent nextPage={nextPage} prevPage={prevPage} />
      <View style={styles.pagination}>
        {[0, 1, 2].map((index) => (
          <TouchableOpacity key={index} style={styles.paginationDot} onPress={() => setCurrentPage(index)}>
            {index === currentPage ? <Text style={styles.dotText}>—</Text> : <Text style={styles.dotText}>•</Text>}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  paginationDot: {
    marginHorizontal: 5,
  },
  dotText: {
    fontSize: 24,
    color: '#333',
  },
});

export default Register;
