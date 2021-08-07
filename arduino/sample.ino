int data = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
}

void loop() {
  // put your main code here, to run repeatedly:
  data += 100;
  Serial.print(data);
  Serial.print("\n");
  delay(1000);
}