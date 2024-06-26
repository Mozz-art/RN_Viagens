import React from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { Dimensions } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";
import * as Animatable from "react-native-animatable";
import moment from "moment";

const Graficos = () => {
  const stepCount = useSelector((state) => state.pedometer.stepCount);
  const distance = useSelector((state) => state.pedometer.distance);
  const tasks = useSelector((state) => state.pedometer.tasks);
  const galleryImages = useSelector((state) => state.pedometer.galleryImages);

  const screenWidth = Dimensions.get("window").width * 0.85;

  const dataDistancia = {
    labels: ["Passos", "Distância"],
    datasets: [
      {
        data: [stepCount, distance],
        color: (opacity = 1) => `rgba(3, 169, 244, ${opacity})`,
      },
    ],
  };

  const dataTasks = {
    labels: ["Tasks"],
    datasets: [
      {
        data: [tasks.length],
        color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`,
      },
    ],
  };

  const galleryData = prepareGalleryData(galleryImages);
  const tasksData = prepareTasksData(tasks);
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(3, 169, 244, ${opacity})`,
    strokeWidth: 3,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  return (
    <S.Container>
      <S.ContainerFix>
        <Animatable.View animation="slideInDown" duration={2500}>
          <Animatable.View animation="fadeIn" duration={5000}>
            <S.Title>Gráficos</S.Title>
            <S.SubTitle>Distância percorrida:</S.SubTitle>
          </Animatable.View>
        </Animatable.View>
        <LineChart
          data={dataDistancia}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <Animatable.View animation="slideInDown" duration={2500}>
          <Animatable.View animation="fadeIn" duration={5000}>
            <S.SubTitle>Número de Fotos na Galeria:</S.SubTitle>
          </Animatable.View>
        </Animatable.View>
        <LineChart
          data={galleryData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <Animatable.View animation="slideInDown" duration={2500}>
          <Animatable.View animation="fadeIn" duration={5000}>
            <S.SubTitle>Número de Tasks por Mês:</S.SubTitle>
          </Animatable.View>
        </Animatable.View>
        <BarChart
          data={tasksData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </S.ContainerFix>
    </S.Container>
  );
};
const prepareGalleryData = (galleryImages) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels: months,
    datasets: [
      {
        data: months.map((month) => {
          const count = galleryImages.filter(
            (image) => moment(image.date).format("MMM") === month
          ).length;
          return count;
        }),
        color: (opacity = 1) => `rgba(46, 204, 113, ${opacity})`,
      },
    ],
  };

  return data;
};

const prepareTasksData = (tasks) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels: months,
    datasets: [
      {
        data: months.map((month) => {
          const count = tasks.filter(
            (task) => moment(task.date).format("MMM") === month
          ).length;
          return count;
        }),
        color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`,
      },
    ],
  };

  return data;
};

export default Graficos;
