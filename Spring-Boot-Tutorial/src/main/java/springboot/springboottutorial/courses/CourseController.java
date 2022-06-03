package springboot.springboottutorial.courses;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import springboot.springboottutorial.courses.bean.Course;

import java.util.Arrays;
import java.util.List;

@RestController
public class CourseController{
    //https://localhost:8080/courses
    @GetMapping("/courses")
    public List<Course> getAllCourses(){
        return Arrays.asList(new Course(1, "Learn Microservices", "Author"),
                             new Course(2, "Learn FullStack", "Author"));
    }

    //https://localhost:8080/courses/1
    @GetMapping("/courses/1")
    public Course getCourseDetails(){
        return getAllCourses().get(0);
    }

}
