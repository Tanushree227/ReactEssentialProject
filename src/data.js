import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: "Encapsulation",
        description: "Encapsulation is the process of combining data and codes into a single unit. It helps keep code organized, as well as helps prevent accidental data manipulation and changes."
    },
    {
        image: jsxImg,
        title: "Abstraction",
        description: "An abstraction is a form of simplification and organization, allowing developers to focus on the essential parts of their code without focusing on the implementation details. It helps developers create code in a more efficient manner, while still providing the same functionality."
    },
    {
        image: propsImg,
        title: "Inheritance",
        description: "Inheritance is the process of creating new classes based on an existing class. It allows the developer to create subclasses that will inherit the attributes and behaviors of the parent class. This makes it easy to reuse code, making development faster and more efficient."
    },
    {
        image: stateImg,
        title: "Polymorphism",
        description: "Polymorphism is a form of abstraction that allows different classes to fulfill the same behavior. By taking advantage of polymorphism, developers can create code that is more easily maintained and more versatile."
    },
];

export const EXAMPLES = {
    encapsulation: 
    {
        title: "Encapsulation",
        description: "Encapsulation is defined as the wrapping up of data under a single unit. It is the mechanism that binds together code and the data it manipulates. Another way to think about encapsulation is, that it is a protective shield that prevents the data from being accessed by the code outside this shield. ",
        code:
        `class Name {
            // Private is using to hide the data
            private int age;
         
            // getter
            public int getAge() { return age; }
         
            // setter
            public void setAge(int age) { this.age = age; }
        }
        
        class Test {
            // main function
            public static void main(String[] args)
            {
                Name n1 = new Name();
                n1.setAge(19);
                System.out.println("The age of the person is: "
                                   + n1.getAge());
            }
        }`
    },
    abstraction: 
    {
        title: "Abstraction",
        description: "Data Abstraction may also be defined as the process of identifying only the required characteristics of an object ignoring the irrelevant details. The properties and behaviors of an object differentiate it from other objects of similar type and also help in classifying/grouping the objects.",
        code:
        `abstract class Animal {
            private String name;
         
            public Animal(String name) { this.name = name; }
         
            public abstract void makeSound();
         
            public String getName() { return name; }
        }
         
        // Abstracted class
        class Dog extends Animal {
            public Dog(String name) { super(name); }
         
            public void makeSound()
            {
                System.out.println(getName() + " barks");
            }
        }
         
        // Abstracted class
        class Cat extends Animal {
            public Cat(String name) { super(name); }
         
            public void makeSound()
            {
                System.out.println(getName() + " meows");
            }
        }
         
        // Driver Class
        public class AbstractionExample {
            // Main Function
            public static void main(String[] args)
            {
                Animal myDog = new Dog("Buddy");
                Animal myCat = new Cat("Fluffy");
         
                myDog.makeSound();
                myCat.makeSound();
            }
        }`
    },
    inheritance: 
    {
        title: "Inheritance",
        description: "Inheritance is a feature or a process in which, new classes are created from the existing classes. The new class created is called “derived class” or “child class” and the existing class is known as the “base class” or “parent class”. The derived class now is said to be inherited from the base class.",
        code:
        `class Parent { 
            public: 
                int id_p; 
            }; 
              
            // Sub class inheriting from Base Class(Parent) 
            class Child : public Parent { 
            public: 
                int id_c; 
            }; 
              
            // main function 
            int main() 
            { 
                Child obj1; 
              
                // An object of class child has all data members 
                // and member functions of class parent 
                obj1.id_c = 7; 
                obj1.id_p = 91; 
                cout << "Child id is: " << obj1.id_c << '\n'; 
                cout << "Parent id is: " << obj1.id_p << '\n'; 
              
                return 0; 
            }`
    },
    polymorphism: 
    {
        title: "Polymorphism",
        description: "Polymorphism is considered one of the important features of Object-Oriented Programming. Polymorphism allows us to perform a single action in different ways. In other words, polymorphism allows you to define one interface and have multiple implementations. The word “poly” means many and “morphs” means forms, So it means many forms.",
        code:
        `class Helper {
 
            // Method with 2 integer parameters
            static int Multiply(int a, int b)
            {
                // Returns product of integer numbers
                return a * b;
            }
         
            // Method 2
            // With same name but with 2 double parameters
            static double Multiply(double a, double b)
            {
                // Returns product of double numbers
                return a * b;
            }
        }
         
        // Class 2
        // Main class
        class Test {
            // Main driver method
            public static void main(String[] args)
            {
                // Calling method by passing
                // input as in arguments
                System.out.println(Helper.Multiply(2, 4));
                System.out.println(Helper.Multiply(5.5, 6.3));
            }
        }`
    }
}